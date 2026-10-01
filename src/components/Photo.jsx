import { useState } from "react";

export default function Photo({
  src,
  alt,
  caption,
  className = "",
  width,
  height,
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      {failed ? (
        <div className="photo-fallback" role="img" aria-label={alt}>
          <svg viewBox="0 0 80 100" aria-hidden="true">
            <path
              d="M10 18h60M10 40h60M10 62h60M10 84h60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
        />
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
