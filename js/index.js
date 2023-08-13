var siteName = document.getElementById("siteName");
var siteLink= document.getElementById("siteLink");
var tableData = document.getElementById("tableData"); 
var allbookmarks; // declaration


if(localStorage.getItem("allbookmarks") !== null){
    allbookmarks =JSON.parse( localStorage.getItem("allbookmarks"))
    display()
}else{
    allbookmarks=[]
}

// function add Bookmarket

function getelment(){
var book = {
    name:siteName.value,
    url:siteLink.value
    }

 allbookmarks.push(book);
    display()
    setStorage()
    clearInputs()
    console.log(allbookmarks);}

// function display 

function display(){
    var trs=""
    for(var i =0; i<allbookmarks.length ; i++){
        trs +=`<tr>
                    <td>${i}</td>
                    <td>${allbookmarks[i].name}</td>
                    <td><a target="_blank" href="${allbookmarks[i].url}"><i class="fa-solid fa-eye fa-xl" style="color: #22ec7a;"></i></a></td>
                    <td> <a class="delete" onclick="deleteInput(${i})"><i class="fa-solid fa-trash fa-xl" style="color: #e50606;"></i></a></td>
                    </tr> `}
                  tableData.innerHTML = trs;}

// function clear inputs 

function clearInputs(){
    siteName.value = "";
    siteLink.value = "";
}

// local storage 
function setStorage(){
    localStorage.setItem("allbookmarks", JSON.stringify(allbookmarks))
}

// function delete 
function deleteInput(index){
    console.log(index);
    allbookmarks.splice(index,1)
    console.log(allbookmarks);
    display()
    setStorage()
    
}

