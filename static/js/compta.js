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
				location='index.php?page=operationsdumois&action=read&annee='+annee+'&mois='+mois;
				
			},
			"text"
		)		
		
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
					if($(this).find("#postebudgetaire").text()=="Alimentation"){
						
						montantCumulePosteAlim+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAlim.toFixed(2));
				break;
				
				case 'Emprunts':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Emprunts"){
						
						montantCumulePosteEmprunt+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEmprunt.toFixed(2));
				break;
				
				case 'Loisirs':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Loisirs"){
						
						montantCumulePosteLoisirs+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteLoisirs);
				break;
				
				case 'Epargne':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Epargne"){
						
						montantCumulePosteEpargne+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEpargne.toFixed(2));
				break;
				
				case 'Cadeaux':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Cadeaux"){
						
						montantCumulePosteCadeaux+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCadeaux);
				break;
				
				case 'Gasoil':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Gasoil"){
						
						montantCumulePosteGasoil+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGasoil.toFixed(2));
				break;
				
				case 'Vestimentaire':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Vestimentaire"){
						
						montantCumulePosteVestimentaire+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVestimentaire.toFixed(2));
				break;
				
				case 'Télécom':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Télécom"){
						
						montantCumulePosteTelecom+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteTelecom);
				break;
				
				case 'Energie':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Energie"){
						
						montantCumulePosteEnergie+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteEnergie.toFixed(2));
				break;
				
				case 'Santé':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Santé"){
						
						montantCumulePosteSante+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSante.toFixed(2));
				break;
				
				case 'Taxes/Impôts':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Taxes/Impôts"){
						
						montantCumulePosteImpots+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteImpots.toFixed(2));
				break;
				
				case 'Vacances(location)':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Vacances(location)"){
						
						montantCumulePosteVacances+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteVacances.toFixed(2));
				break;
				
				case 'Auto (assurance+entretien)':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Auto (assurance+entretien)"){
						
						montantCumulePosteAuto+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteAuto.toFixed(2));
				break;
				
				case 'Maison':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Maison"){
						
						montantCumulePosteMaison+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteMaison.toFixed(2));
				break;
				
				case 'Scolarité':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Scolarité"){
						
						montantCumulePosteScolarite+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteScolarite.toFixed(2));
				break;
				
				case 'Garde Enfants':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Garde Enfants"){
						
						montantCumulePosteGardeEnfants+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteGardeEnfants.toFixed(2));
				break;
				
				case 'CAF':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="CAF"){
						
						montantCumulePosteCAF+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteCAF.toFixed(2));
				break;
				
				case 'Salaire':
				$('.ligneoperation').each(function(){
					if($(this).find("#postebudgetaire").text()=="Salaire"){
						
						montantCumulePosteSalaire+=(parseFloat($(this).find('#montant').val()));
					}
						
				});
				
				$(this).find(".recapmontantposte").val(montantCumulePosteSalaire.toFixed(2));
				break;
			
				
						
			}
		});
	}
	
	calcul_montant_cumule();
	
	// $('.editable').click(function(){
		// console.log('zone editable');
		// $(this).each(function(){
			
			// switch($(this).attr('id')){
				// case 'date':
					// $(this).replaceWith('<input type="date" value=""/>');
				// break;
				
				// case 'nature':
					// $(this).replaceWith('<select><option value="Dépense">Dépense</option><option value="Recette">Recette</option></select>');
				// break;
				
				// case 'type':
					// $(this).replaceWith('<select><option value="Carte bancaire">Carte bancaire</option><option value="Chèque">Chèque</option><option value="Virement">Virement</option><option value ="Prélèvement">Prélèvement</option></select>');
				// break;
				
				// case 'postebudgetaire':
					// $(this).replaceWith('<select><option value="Alimentation">Alimentation</option><option value="Emprunts">Emprunts</option><option value="Loisirs">Loisirs</option><option value="Epargne">Epargne</option><option value="Cadeaux">Cadeaux</option><option value="Gasoil">Gasoil</option><option value="Vestimentaire">Vestimentaire</option><option value="Télécom">Télécom</option><option value="Energie">Energie</option><option value="Santé">Santé</option><option value="Taxes/Impôts">Taxes/Impôts</option><option value="Vacances(location)">Vacances(location)</option><option value="Auto (assurance+entretien)">Auto (assurance+entretien)</option><option value="Maison">Maison</option><option value="Scolarité">Scolarité</option><option value="Garde Enfants">Garde Enfants</option><option value="CAF">CAF</option><option value="Salaire">Salaire</option></select>');
				// break;
				
				
				
			// }
		// });
	
	// });
	
})
