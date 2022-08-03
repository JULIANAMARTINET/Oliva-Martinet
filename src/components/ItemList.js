import Item from "./Item";

  const ItemList = ({listProductos}) => {

  return (
    <div>
      {listProductos.map(productos => 
          <Item
            key={productos.id}
            productos={productos}
          />
      )}
    </div>
  );
};

export default ItemList;
