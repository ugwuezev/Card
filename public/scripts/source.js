$(document).ready(function(){
    //alert("Hi guys")
    $.ajax({
        url: 'http://localhost:3000/Card',
        method: 'get',
        }).done((e)=>{
            console.log(e)
            for (let i = 0; i < e.length; i++){
                $('#tbody').append(
                    `<tr>
                        <td>
                            ${i + 1}
                        </td>
                        <td>
                            ${e[i].denomination} 
                        </td>
                        <td>
                            ${e[i].pin}
                        </td>
                        <td>
                            ${e[i].validity}
                        </td>
                        <td>${e[i].creator}</td>
                        <td>
                            <button id="del-${e[i].id}" class="delete-btn">Delete</button>
                            <button id="edt-${e[i].id}" class="edit-btn">Edit</button>
                        </td>
                    </tr>`
                )
            }
            //functionality on delete button
            $('.delete-btn').on('click',(e)=>{
                let id = e.target.id.split('del-').join('')
                alert(id)
                $.ajax({
                    url:`http://localhost:3000/Card/${id}`,
                    method: 'delete'
                }).done((e)=>{

                })
            })

            $('.edit-btn').click(e=>{
                
            })

        })
                
                $('#form').submit((e)=>{
                    e.preventDefault()
                    let denomination = parseInt($('#denomination').val());
                    let pin = Number($('#pin').val());
                    let validity = String($('#validity').val());
                    let creator = String($('#creator').val())
                    ///alert(`${denomination}, ${pin}, ${validity}, ${creator}`)
                    $.ajax({
                        url: 'http://localhost:3000/Card',
                        method: 'post',
                        data: {
                            denomination: Number(denomination), pin: Number(pin), validity: String(validity), creator: String(creator)
            }
        }).done((e)=>{
            $('#tbody').append(
                `<tr>
                <td>
                    ${e.denomination} 
                    </td>
                    <td>
                    ${e.pin} 
                    </td>
                    <td>
                        ${e.validity}
                        </td>
                        <td>
                        ${e.creator}
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger delete-btn">Delete</button>
                        </td>
                        </tr>`
                        )
                        
                        $('#denomination').val('');
                        $('#pin').val('');
                        $('#validity').val('');
                        $('#creator').val('')
                        
                    })
    })
    
});

/* $("#update").on("click", event=> {
	let denomination = parseInt($('#denomination').val());
	let pin = Number($('#pin').val());
	let validity = String($('#validity').val());
	let creator = String($('#creator').val())

}) */

/* Generating 16 digits randomly
    console.log(Math.floor(1000000000000000 + Math.random() * 9000000000000000)); 
    */

/* function to generate 16 random digits */
/* function cardGenerator() {
	let result = "";
	for (let i = 0; i < 15; i++) {
		let num = Math.ceil(Math.random() * 8)
		result += num
	}
	return result
}

console.log(cardGenerator()) */

