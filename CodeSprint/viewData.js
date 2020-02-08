function UserDetails(name, address,city,userPackage,trainer,phone) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.package = userPackage;
    this.trainer = trainer;
    this.phone = phone;
  }
USER_DETAILS = 'USER_DETAIL';
var data = JSON.parse(localStorage.getItem(USER_DETAILS));
for(user in data)
{
    var i = 1;
    var string ="<tr><td scope='col'>"+i+"</td></tr>" +  
     "<tr><td scope='col'>"+user.name+"</td></tr>" + "<tr><td scope='col'>"+user.address+"</td></tr>" + "<tr><td scope='col'>"+user.city+"</td></tr>" +"<tr><td scope='col'>"+user.userPackage+"</td></tr>"+
    "<tr><td scope='col'>"+user.trainer+"</td></tr>" + "<tr><td scope='col'>"+user.phone+"</td></tr>" + 
    i++;
    $("#data").append(string);
}
$("#data")
/*<tr>
<th scope="col">S.No</th>
<th scope="col">NAME</th>
<th scope="col">Address</th>
<th scope="col">City</th>
<th scope="col">Package</th>
<th scope="col">Trainer preference</th>
<th scope="col">Phone</th>

</tr>*/