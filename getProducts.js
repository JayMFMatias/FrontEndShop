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
        row.innerHTML =
        `
        <td>${element.seller}</td>
        <td>${element.product_name}</td>
        <td>${element.product_desc}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>



        `;
        tableBody.appendChild(row);
    });        
    
} catch (error)
    {
        console.error(error);
    }   
}
getProducts();