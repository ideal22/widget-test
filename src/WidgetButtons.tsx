const products = [
  {
    id: '1',
    productName: 'Iphone 14 pro max',
    price: '23000000',
  },
  {
    id: '2',
    productName: 'Samsung s22 ultra',
    price: '20000000',
  },
  {
    id: '3',
    productName: 'Macbook m2 pro',
    price: '33000000',
  },
]

const WidgetButtonsList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
      {products.map((product) => (
        <button
          key={product.id}
          style={{ marginLeft: 10, cursor: 'pointer' }}
          data-installment-states
          data-state={JSON.stringify({ product })}
          className="smartbank-widget"
          id="smartbank-widget"
        >
          Buy {product.productName}
        </button>
      ))}
    </div>
  )
}
export default WidgetButtonsList
