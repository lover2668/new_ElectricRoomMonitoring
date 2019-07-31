function changestated(obj,eId){
    var em=document.getElementById("sf_"+eId);
    if(obj.src.indexOf("res/on.png")>=0){
        obj.src="res/off.png";
        if(em!=null){
            em.setAttribute("class","unenabled")
            em.innerHTML="关闭";
        }
    }else{
        obj.src="res/on.png";
        if(em!=null){
            em.setAttribute("class","normal");
            em.innerHTML="正常";
        }
    }
}
function reset(eId){
    var reset=document.getElementById("sf_"+eId);
    if(reset.innerHTML=="正常"){
        reset.innerHTML="告警";
        reset.setAttribute("class","unnormal")
    }else if(reset.innerHTML=="告警"){
        reset.innerHTML="正常";
        reset.setAttribute("class","normal");
    }
}
function createline(id,name,state){
    var filename="'res/on.png'";
    var ediv=document.createElement("div");
    ediv.setAttribute("class","bg");
    var epid=document.createElement("p");
    epid.setAttribute("class","lable");
    epid.innerHTML=id;
    ediv.appendChild(epid);
    var epname=document.createElement("p");
    epname.setAttribute("class","lable");
    epname.setAttribute("id","name_"+id);
    epname.innerHTML=name;
    ediv.appendChild(epname);
    var epstate=document.createElement("p");
    if(state=="正常"){
        epstate.setAttribute("class","normal");
        filename="'res/on.png'"
    }else if(state=="告警"){
        epstate.setAttribute("class","unnormal");
        filename="'res/on.png'"
    }else if(state=="关闭"){
        epstate.setAttribute("class","unenabled");
        filename="'res/off.png'"
    }
    epstate.setAttribute("id","sf_"+id);
    epstate.innerHTML=state;
    ediv.appendChild(epstate);
    var eprun=document.createElement("p");
    eprun.setAttribute("class","set");
    eprun.innerHTML="<img src="+filename+" style='height:30px;vertical-align: middle;' onclick=\"changestated(this,'"+id+"')\"/>";
    ediv.appendChild(eprun);
    var epset=document.createElement("p");
    epset.setAttribute("class","set");
    epset.innerHTML="<button onclick=\"reset('"+id+"')\">设置/复位</button>"
    ediv.appendChild(epset);
    var epother=document.createElement("p");
    epother.setAttribute("class","set");
    epother.innerHTML="<button onclick=\"other(this,'"+id+"')\">更多∨</button>";
    ediv.appendChild(epother);
    return ediv;
}
document.getElementById("main").appendChild(createline("flolddd1","name1","告警"));
function other(obj,eid){
    document.getElementById("fudong").style.left=(obj.offsetLeft+obj.offsetWidth)+"px";
    document.getElementById("fudong").style.top=obj.offsetTop+"px";
    document.getElementById("fudong").style.display="block";
    document.getElementById("bind_name").innerHTML= document.getElementById("name_"+eid).innerHTML;
}
function hideself(obj){
    if((obj==null)||(obj==undefined)){
        obj=document.getElementById("fudong");
    }
    obj.style.display="none"
}