<!DOCTYPE html>
<?php $title="Opérations du mois en cours"?>
<html>
	<body>
		<div id="titrepageoperations">
			<p>Opérations du mois de </p>
			<p><?php echo($moisConvivial.'  '.$annee)?>
		</div>
		
		<div id="img">
			<a href="index.php"><p>Retour à l'accueil</p></a>
		</div>
		
		<div id="operationssaisies">
		
			<div>
				<span> Report: </span>
				<input id="report" type="number" step="0.01"/>
			</div>
			
			<table>
				<thead>
					<tr>
						<th>Action</th>
						<th>Date de l'opération</th>
						<th>Nature</th>
						<th>Type</th>
						<th>Poste budgétaire</th>
						<th>Intitulé</th>
						<th>Montant</th>					
					</tr>
				</thead>
				<tbody> 
				<?php 
				foreach($operationsDuMois as $oM){
					echo('
						<tr>
							<td>Modif.|Suppr.</td>
							<td>'.$oM['date'].'</td>
							<td>'.$oM['nature'].'</td>
							<td id="type">'.$oM['type'].'</td>
							<td>'.get_nom_poste_budgetaire_from_id_poste_budgetaire($oM['posteBudgetaire'])['nom'].'</td>
							<td>'.$oM['intitule'].'</td>
							<td><input class="montant" type="text" value="'.$oM['montant'].'"/></td>
						</tr>
					');
				}
				?>
				</tbody>			
			</table>
			<div>
							
				<span>Solde: </span>
				<input id="solde" type="text" name="solde" value=""/>
				
			
			</div>
		</div>
		
		<hr>
		
		<div id="saisieetrecap">
			<div id="formulairesaisie">
				<p id="titresaisie">Saisir une nouvelle opération</p>
				
					
						<p>
							<span>Date:</span>						
							<input id="dateoperation" type="date" name="dateoperation" value="dateoperation"/>
							
						
							<span>Nature:</span>
							<select id="natureoperation" name="natureoperation">
								<option value="Dépense">Dépense</option>
								<option value="Recette">Recette</option>
							</select>
						
							<span>Type:</span>
							<select id="typeoperation" name="typeoperation">
								<option value="Carte Bancaire">Carte bancaire</option>
								<option value="Chèque">Chèque</option>
								<option value="Virement">Virement</option>
								<option value="Prélèvement">Prélèvement</option>
							</select>
							
							<span>Poste budgétaire:</span>
							<select id="postebudgetaire" name="postebudgetaire">
								<?php foreach($posteBudgetaire as $pb){echo ("<option value=".$pb['nom'].">".$pb['nom']."</option>");}?>
							</select>
							
							<span>Intitulé:</span>
							<textarea id="intituleoperation"rows="1" cols="40"></textarea>
							
							<span>Montant:</span>
							<input id="montantoperation" type="number" step="0.01"/>										
					
						</p>
						<input id="saveOperation" type="button" name="enregistrer" value="Enregistrer"/>
			</div>
			
			<hr id="separationsaisierecap">
		
			<div id="recapdumois">
				<p>Récap du mois</p>
				<table>
					<thead>
						<tr>
							<th>Poste budgétaire</th>
							<th>Montant cumulé du mois</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<hr>
			
				
	</body>
	
</html>
<?php include(dirname(__FILE__)."/../templates/template.php");