$(document).ready(function(){
	
	$('#report').load('index.php?page=operationsdumois&action=read&annee=2019&mois=04 #solde');
	
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
		var solde;
		var montantDepenses=0;
		var montantRecettes=0;
		
		$('.ligneoperation').each(function(){
			if($(this).find(".nature").val()=="Dépense"){
				
					//alert(-($(this).find(".montant").val()));
					montantDepenses+=(parseFloat($(this).find('.montant').val()));
					
					
				
			}
			else{
					montantRecettes+=(parseFloat($(this).find('.montant').val()));
					
			}
			
		});
		console.log('montant des recettes: '+montantRecettes+' montant des dépenses: '+montantDepenses)
		
		solde=montantRecettes-montantDepenses;
		
		$('#solde').val(solde.toFixed(2));	
	
	}
	calcul_solde();
	
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
					if($(this).find(".postebudgetaire").val()=="Alimentation"){
						
						montantCumulePosteAlim+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAlim.toFixed(2));
				break;
				
				case 'Emprunts':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Emprunts"){
						
						montantCumulePosteEmprunt+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEmprunt.toFixed(2));
				break;
				
				case 'Loisirs':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Loisirs"){
						
						montantCumulePosteLoisirs+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteLoisirs);
				break;
				
				case 'Epargne':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Epargne"){
						
						montantCumulePosteEpargne+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEpargne.toFixed(2));
				break;
				
				case 'Cadeaux':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Cadeaux"){
						
						montantCumulePosteCadeaux+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCadeaux);
				break;
				
				case 'Gasoil':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Gasoil"){
						
						montantCumulePosteGasoil+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGasoil.toFixed(2));
				break;
				
				case 'Vestimentaire':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Vestimentaire"){
						
						montantCumulePosteVestimentaire+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVestimentaire.toFixed(2));
				break;
				
				case 'Télécom':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Télécom"){
						
						montantCumulePosteTelecom+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteTelecom);
				break;
				
				case 'Energie':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Energie"){
						
						montantCumulePosteEnergie+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEnergie.toFixed(2));
				break;
				
				case 'Santé':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Santé"){
						
						montantCumulePosteSante+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSante.toFixed(2));
				break;
				
				case 'Taxes/Impôts':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Taxes/Impôts"){
						
						montantCumulePosteImpots+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteImpots.toFixed(2));
				break;
				
				case 'Vacances(location)':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Vacances(location)"){
						
						montantCumulePosteVacances+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVacances.toFixed(2));
				break;
				
				case 'Auto (assurance+entretien)':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Auto (assurance+entretien)"){
						
						montantCumulePosteAuto+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAuto.toFixed(2));
				break;
				
				case 'Maison':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Maison"){
						
						montantCumulePosteMaison+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteMaison.toFixed(2));
				break;
				
				case 'Scolarité':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Scolarité"){
						
						montantCumulePosteScolarite+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteScolarite.toFixed(2));
				break;
				
				case 'Garde Enfants':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Garde Enfants"){
						
						montantCumulePosteGardeEnfants+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGardeEnfants.toFixed(2));
				break;
				
				case 'CAF':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="CAF"){
						
						montantCumulePosteCAF+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCAF.toFixed(2));
				break;
				
				case 'Salaire':
				$('.ligneoperation').each(function(){
					if($(this).find(".postebudgetaire").val()=="Salaire"){
						
						montantCumulePosteSalaire+=(parseFloat($(this).find('.montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSalaire.toFixed(2));
				break;
			
				
						
			}
		});
	}
	
	calcul_montant_cumule();
	
	
	
})