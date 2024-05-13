function beforesubmit()
{
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    let formatteddate=new Date(inputdate.value).toLocaleDateString("en-In");

    outputdate.value=formatteddate;
}