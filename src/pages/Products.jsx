import React from "react";
import GroupExample from '../components/items';
import{ useParams} from 'react-router-dom';
const Products=()=>{
  const params=useParams();
  const productId=params.itemsId;
if(!productId){
  <h2>Invalid ProductsId</h2>
}
    return(
        
 <div className="container-home">

<div className='row'>
  <div className='col-lg-4'>
  <GroupExample isVisible={true} Cardtitle={productId+"jeans legging kurta"}
  Description={"having the orign based from the India"}
  Price={"800R"} />
  </div>
<div className='col-lg-4'> 
<GroupExample  isVisible={true} Cardtitle={"jeans legging kurta"}
  Description={"having the orign based from the India"}
  Price={"800R"}/>
  </div> 
  <div className='col-lg-4'>
    <GroupExample isVisible={true} Cardtitle={"jeans legging kurta"}
  />
  </div> 
  </div>
        </div>
    );
}
export default Products;