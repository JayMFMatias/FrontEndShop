async function deleteProduct(event)
{
    console.log(event.target.id);
    try{  
       await fetch(`http://localhost:3000/products/${event.target.id}`, 
        {
            method: "DELETE",        
        })
         location.reload();
    } catch(error)
    {
        console.error(error);
    }


}
async function sConsole(event) 
{
    const newProduct = 
    {
        sellerName: document.getElementById("sellerName").value,
        productName:document.getElementById("productName").value,
        desc:document.getElementById("desc").value,
        quantity:document.getElementById("quantity").value,
        price:document.getElementById("price").value,
    }
    event.preventDefault();
    console.log(newProduct);

    try{
        console.log(JSON.stringify(newProduct));
    
        const result = await fetch("http://localhost:3000/products", 
        {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers:
            {
                "Content-type": "application/json; charset=UTF-8"
            }
        
        })
         console.log(await result.json());
         location.reload();
    } catch(error)
    {
        console.error(error);
    }
}

async function getProducts()
{
try 
{
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    console.log(data);

    const tableBody= document.querySelector("#product-table tbody")
    console.log(tableBody)
    data.forEach(element =>
    {
        
        console.log(element)
        const row = document.createElement("tr")
        row.className= "product-row";
        row.id=element.id;
        row.innerHTML =
        `
        
        <td>${element.seller}</td>
        <td>${element.product_name}</td>
        <td>${element.product_desc}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>
        <button id =${element.id} onclick= "deleteProduct(event)"> -  </button>
        `;
        tableBody.appendChild(row);
    });        
    
} catch (error)
    {
        console.error(error);
    }   
}
getProducts();
