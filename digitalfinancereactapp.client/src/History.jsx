import React from "react";
import "./style.css";

function History() {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[500px] bg-neutral-50 p-6 shadow-md rounded-lg">
    	  <h1 className="text-2xl font-title mb-4">История банковского счёта</h1>
    	  <form className="flex flex-col gap-4">
    	    <div className="flex flex-col">
    	      <label htmlFor="accountNumber" className="text-sm mb-2">Номер счёта</label>
    	      <input type="text" id="accountNumber" name="accountNumber" className="border rounded-md p-2" placeholder="Введите номер счёта" />
    	    </div>
    	
    	    <div className="flex flex-col">
    	      <label htmlFor="startDate" className="text-sm mb-2">Дата начала</label>
    	      <input type="date" id="startDate" name="startDate" className="border rounded-md p-2" />
    	    </div>
    	
    	    <div className="flex flex-col">
    	      <label htmlFor="endDate" className="text-sm mb-2">Дата окончания</label>
    	      <input type="date" id="endDate" name="endDate" className="border rounded-md p-2" />
    	    </div>
    	
    	    <button type="submit" className="bg-primary text-white p-2 rounded-md">Просмотр</button>
    	  </form>
    	</div> 
    </div>
  )
};

export default History;
