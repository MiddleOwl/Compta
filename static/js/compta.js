$(document).ready(function(){
	
	var url=new URL(location);	
	var annee=url.searchParams.get('annee');
	var mois=url.searchParams.get('mois');
	
	
	$.get(
	
		'index.php?page=operationsdumois&action=solde',
		
		{'annee':annee,'mois':mois},
		
		function(data){
			$('#solde').val(data);			
		},
		
		'text'
	);
	
	
	 $('.update').click(function(){
		 
		var idOperation = $(this).parent().attr('id');
		console.log(idOperation);
		$('#idOperation').val(idOperation);
		$('#dateoperation').val($(this).find('~td#date').text());
		$('#natureoperation').val($(this).find('~td#nature').text());
		$('#typeoperation').val($(this).find('~td#type').text());
		$('#postebudgetaire').val($(this).find('~td#postebudgetaireoperation').text());
		$('#intituleoperation').val($(this).find('~td#intitule').text());
		$('#montantoperation').val($(this).find('~td input').val());
		$('#saveOperation').val("Modifier l'opération");
		
	 });
	
	
	
	$('#saveOperation').click(function(){
		
		
		switch($('#saveOperation').val()){
			
			case 'Enregistrer':
		
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
					location='index.php?page=operationsdumois&action=read&annee='+annee+'&mois='+mois;
					
				},
				"text"
			)
			break;
			
			case 'Modifier l\'opération':
			
			$.post(
				'index.php?page=operationsdumois&action=update',
				{
					id:$('#idOperation').val(),
					date:$('#dateoperation').val(),
					nature:$('#natureoperation').val(),
					type:$('#typeoperation').val(),
					poste:$('#postebudgetaire').val(),
					intitule:$('#intituleoperation').val(),
					montant:$('#montantoperation').val(),
					
				},
				function(data){
					alert(data);
					location='index.php?page=operationsdumois&action=read&annee='+annee+'&mois='+mois;
				},
				"text"
			)		
		}			
		
	});	
	
	
	function calcul_montant_cumule(){
		var montantCumulePosteAlim=0;
		var montantCumulePosteEmprunt=0;
		var montantCumulePosteLoisirs=0;
		var montantCumulePosteEpargne=0;
		var montantCumulePosteCadeaux=0;
		var montantCumulePosteGasoil=0;
		var montantCumulePosteVestimentaire=0;
		var montantCumulePosteTelecom=0;
		var montantCumulePosteEnergie=0;
		var montantCumulePosteSante=0;
		var montantCumulePosteImpots=0;
		var montantCumulePosteVacances=0;
		var montantCumulePosteAuto=0;
		var montantCumulePosteMaison=0;
		var montantCumulePosteScolarite=0;
		var montantCumulePosteGardeEnfants=0;
		var montantCumulePosteCAF=0;
		var montantCumulePosteSalaire=0;
		
		$('.recapmensuelle').each(function(){
			switch($(this).find(".recapnomposte").val()){
				case 'Alimentation':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Alimentation"){
						
						montantCumulePosteAlim+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAlim.toFixed(2));
				break;
				
				case 'Emprunts':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Emprunts"){
						
						montantCumulePosteEmprunt+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEmprunt.toFixed(2));
				break;
				
				case 'Loisirs':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Loisirs"){
						
						montantCumulePosteLoisirs+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteLoisirs.toFixed(2));
				break;
				
				case 'Epargne':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Epargne"){
						
						montantCumulePosteEpargne+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEpargne.toFixed(2));
				break;
				
				case 'Cadeaux':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Cadeaux"){
						
						montantCumulePosteCadeaux+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCadeaux.toFixed(2));
				break;
				
				case 'Gasoil':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Gasoil"){
						
						montantCumulePosteGasoil+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGasoil.toFixed(2));
				break;
				
				case 'Vestimentaire':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Vestimentaire"){
						
						montantCumulePosteVestimentaire+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVestimentaire.toFixed(2));
				break;
				
				case 'Télécom':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Télécom"){
						
						montantCumulePosteTelecom+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteTelecom.toFixed(2));
				break;
				
				case 'Energie':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Energie"){
						
						montantCumulePosteEnergie+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEnergie.toFixed(2));
				break;
				
				case 'Santé':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Santé"){
						
						montantCumulePosteSante+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSante.toFixed(2));
				break;
				
				case 'Taxes/Impôts':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Taxes/Impôts"){
						
						montantCumulePosteImpots+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteImpots.toFixed(2));
				break;
				
				case 'Vacances(location)':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Vacances(location)"){
						
						montantCumulePosteVacances+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVacances.toFixed(2));
				break;
				
				case 'Auto (assurance+entretien)':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Auto (assurance+entretien)"){
						
						montantCumulePosteAuto+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAuto.toFixed(2));
				break;
				
				case 'Maison':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Maison"){
						
						montantCumulePosteMaison+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteMaison.toFixed(2));
				break;
				
				case 'Scolarité':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Scolarité"){
						
						montantCumulePosteScolarite+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteScolarite.toFixed(2));
				break;
				
				case 'Garde Enfants':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Garde Enfants"){
						
						montantCumulePosteGardeEnfants+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGardeEnfants.toFixed(2));
				break;
				
				case 'CAF':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="CAF"){
						
						montantCumulePosteCAF+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCAF.toFixed(2));
				break;
				
				case 'Salaire':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaireoperation").text()=="Salaire"){
						
						montantCumulePosteSalaire+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSalaire.toFixed(2));
				break;
			
				
						
			}
		});
	}
	
	calcul_montant_cumule();	
	
})
