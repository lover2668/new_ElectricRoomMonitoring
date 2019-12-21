function changestated(obj,eId){
    var em=document.getElementById("sf_"+eId);
    if(obj.src.indexOf("res/d3.png")>=0){
        obj.src="res/d9.png";
        if(em!=null){
            em.setAttribute("class","normal")
            em.innerHTML="点亮";
        }
    }else{
        obj.src="res/d3.png";
        if(em!=null){
            em.setAttribute("class","unenabled");
            em.innerHTML="熄灭";
        }
    }
}
/*function reset(eId){
    var reset=document.getElementById(eId);
    if(reset.innerHTML=="正常"){
        reset.innerHTML="异常";
        reset.setAttribute("class","unnormal")
    }else if(reset.innerHTML=="异常"){
        reset.innerHTML="正常";
        reset.setAttribute("class","normal");
    }
}*/
function createline(id,name,state,info){
    var filename="'res/d2.png'";
    var ediv=document.createElement("div");
    ediv.setAttribute("class","bg");
    var epid=document.createElement("p");
    epid.setAttribute("class","lable");
    epid.setAttribute("id",id);
    epid.innerHTML=id;
    ediv.appendChild(epid);
    var epname=document.createElement("p");
    epname.setAttribute("class","lable");
    epname.setAttribute("id","name_"+id);
    epname.innerHTML=name;
    ediv.appendChild(epname);
    var epstate=document.createElement("p");
    if(state=="点亮"){
        epstate.setAttribute("class","normal");
        filename="'res/d9.png'";
    }else if(state=="熄灭"){
        epstate.setAttribute("class","unenabled");
        filename="'res/d3.png'";
    }else if(state=="故障"){
        epstate.setAttribute("class","unnormal");
        filename="'res/d2.png'";
    }
    epstate.setAttribute("id","sf_"+id);
    epstate.innerHTML=state;
    ediv.appendChild(epstate);
    var epinfo=document.createElement("p");
    epinfo.setAttribute("class","lable");
    epinfo.setAttribute("id","info_"+id);
    epinfo.innerHTML=info
    ediv.appendChild(epinfo);
    var eprun=document.createElement("p");
    eprun.setAttribute("class","set");
    eprun.innerHTML="<img src="+filename+" style='height:30px;vertical-align: middle;' onclick=\"changestated(this,'"+id+"')\"/>";
    ediv.appendChild(eprun);
    var epother=document.createElement("p");
    epother.setAttribute("class","set");
    epother.innerHTML="<button onclick=\"other(this,'"+id+"')\">更多∨</button>";
    ediv.appendChild(epother);
    return ediv;
}
for(var i=3;i<10;i++){
    document.getElementById("main").appendChild(createline("light"+i,"name"+i,"故障","无法点亮"));
}
function other(obj,eid){
    document.getElementById("fudong").style.left=(obj.offsetLeft+obj.offsetWidth)+"px";
    document.getElementById("fudong").style.top=obj.offsetTop+"px";
    document.getElementById("fudong").style.display="block";
    document.getElementById("bind_name").innerHTML= document.getElementById("name_"+eid).innerHTML;
}
function hideself(obj){
    obj.style.display="none"
}