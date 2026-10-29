export default function RecentlyViewed({ products }) {
  const items = (products || []).slice(0, 3);

  if (items.length === 0) return null;

  return (
    <div className="recently-viewed-section">
      <h2 className="rv-heading">Recently Viewed Products</h2>

      <div className="rv-grid">
        {items.map((p, i) => (
          <a key={p.id || i} href={p.href || '#'} className="rv-card">
            <img
              className="rv-card-img"
              src={p.image || '/images/sofa-main.jpg'}
              alt={p.title}
              loading="lazy"
            />
            <div className="rv-card-body">
              <p className="rv-card-title">{p.title}</p>
              <span className="rv-card-price">{p.salePrice}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
