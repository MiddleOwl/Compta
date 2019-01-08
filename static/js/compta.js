$(document).ready(function(){
	
	$('#saveOperation').click(function(){
		
		$.post(
			'index.php?page=operationsdumois&action=save',
			
			{
				date:$('#dateoperation').val(),
				nature:$('#natureoperation').val(),
				type:$('#typeoperation').val(),
				poste:$('#postebudgetaire').val(),
				intitule:$('#intituleoperation').val(),
				montant:$('#montantoperation').val(),
				
				
			},
			
			function(data){
				alert(data);
				location='index.php?page=operationsdumois&action=read';			
				
			},
			"text"
		)
		
			
		
	});	
	
	function calcul_solde(){
		var montantTotal=0;
		
		$('.montant').each(function(){
			
			montantTotal+=parseFloat(($(this).val()));
			return(montantTotal);
			
			
			
		});		
		$('#solde').val(montantTotal);	
	
	}
	calcul_solde();
	
	
	
})