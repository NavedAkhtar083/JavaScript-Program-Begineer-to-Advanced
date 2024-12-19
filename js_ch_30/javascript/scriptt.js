let alldata=document.querySelector(".all-data")
const getdata =async () =>
    {
        fetch('https://fakestoreapi.com/products')
            .then((res)=>{
                res.json()
                .then((data) =>{
                    console.log(data)
                    // data.forEach((item,index) => {
                    //     alldata.innerHTML  =`
                    //     `
                        
                    // });
                });
            });

}
