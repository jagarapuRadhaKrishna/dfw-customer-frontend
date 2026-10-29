'use client';

export default function RatingsReviews({ product }) {
  const rating = product.rating || 4.5;
  const reviewCount = product.reviewCount || 245;

  const distribution = [
    { stars: 5, count: 142, pct: 58 },
    { stars: 4, count: 61, pct: 25 },
    { stars: 3, count: 24, pct: 10 },
    { stars: 2, count: 12, pct: 5 },
    { stars: 1, count: 6, pct: 2 },
  ];

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">Ratings &amp; Reviews</h2>

      <div className="reviews-summary">
        {/* Left: Score */}
        <div className="reviews-score">
          <div className="reviews-score-number">{rating}</div>
          <div className="reviews-score-stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ opacity: s <= Math.round(rating) ? 1 : 0.3 }}>★</span>
            ))}
          </div>
          <div className="reviews-score-count">{reviewCount} Reviews</div>
        </div>

        {/* Right: Distribution bars */}
        <div className="reviews-distribution">
          {distribution.map((row) => (
            <div className="rating-bar-row" key={row.stars}>
              <span className="rating-bar-label">{row.stars}</span>
              <span className="rating-bar-star">★</span>
              <div className="rating-bar-track">
                <div
                  className={`rating-bar-fill fill-${row.stars}`}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
              <span className="rating-bar-count">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-actions">
        <button className="btn-write-review">Write a Review</button>
      </div>
    </div>
  );
}
