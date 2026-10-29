import Link from 'next/link';

export default function SimilarProducts({ products }) {
  // Use first 4 products as similar products
  const similar = (products || []).slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <div className="similar-products">
      <h2 className="similar-heading">Similar Products</h2>

      <div className="similar-products-grid">
        {similar.map((p, i) => {
          const salePrice = (p.salePrice || '₹0').replace('₹', '').replace(/,/g, '');
          const mrp = (p.mrp || '₹0').replace('₹', '').replace(/,/g, '');
          const discount = p.discount || Math.round(((parseFloat(mrp) - parseFloat(salePrice)) / parseFloat(mrp)) * 100);

          return (
            <Link
              key={p.id || i}
              href={p.href || '#'}
              className="similar-card"
            >
              <img
                className="similar-card-img"
                src={p.image || '/images/sofa-main.jpg'}
                alt={p.title}
                loading="lazy"
              />
              <div className="similar-card-body">
                <p className="similar-card-title">{p.title}</p>
                <div className="similar-card-price">
                  <span className="sc-sale">{p.salePrice}</span>
                  <span className="sc-mrp">{p.mrp}</span>
                  <span className="sc-discount">{discount}% off</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
