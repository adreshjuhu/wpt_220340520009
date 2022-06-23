const express = require('express');
const app = express();
const mysql = require('mysql2');

app.listen(90,()=> {
	console.log("listening to port no 90");
});

app.use(express.static("sf"));
letndbparams={
	host: 'localhost',
	user:'root',
	pssword:'cdac',
	database:'mydb1'
}
const conn = mysql.createConnection(dbparams);

let output = { status: false,book:{bookid:0,bookname:"",price:0}}
conn.query('select*from book where bookid=?',[bookid],(error,rows))=> {
	if(error)
	{
		console.log("some error")
	}
	else{
		if(rows.length>0){
			output.status = true;
			output.book = row[0];
		}
		else{
			console.log("book not found");
		}
	}
	Response.send(output);
};
app.get("/updatebook",(req,resp)=> {
	console.log("inside update ");
	let book = {bookid:req.query.bookid,bookname:req.query.bookname,price:req.query.price}
	letoutput={status:false}

	conn.query('update book set bookid=?,booknmae=?,price=?'),[book.bookid.book.bookname,book.price],
	(error,resp)=>{
		if(error){
			console.log(error);
		}
		else{
			if(resp.affectedrows>0){
				console.log("update success");
				console.query{
					[book.bookid,book.bookname,book.price],
					(error,resp)=>{
						if(error){
							console.log(error);
						}
						else{
							if(resp.affectedrows>0){
								console.log("update success");
				}
				else{
					console.log("update failed");
				}
			}
		}
	
		resp.send(output);
});