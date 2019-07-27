<?php $title="Opérations du mois en cours"?>

<?php ob_start(); ?>
		<div id="titrepageoperations" class="text-center">
			<p>Opérations du mois de </p>
			<?php echo('<a href="index.php?page=operationsdumois&action=read&annee='.$anneePrecedente.'&mois='.$moisPrecedent.'"><span class="fas fa-angle-double-left" title="Voir les opérations du mois précédent"></span></a>');?>
            <?php echo($moisConvivial.'  '.$annee)?>
            <?php echo ('<a href="index.php?page=operationsdumois&action=read&annee='.$anneeSuivante.'&mois='.$moisSuivant.'"><span class="fas fa-angle-double-right" title="Voir les opérations du mois suivant"></span></a>');?>
		</div>
		
		<div id="img">
			<a href="index.php"><p>Retour à l'accueil</p></a>
		</div>
		
        
		
		<div id= "operationssuivantes">
			
		</div>       
		
		<div id="operationssaisies">
			<table>
				<thead>
					<tr>
						<th style="width: 170px">Action</th>
						<th style="width: 120px">Date de l'opération</th>
						<th style="width: 70px">Nature</th>
						<th style="width: 70px">Type</th>
						<th style="width: 70px">Poste budgétaire</th>			
						<th style="width: 200px">Intitulé</th>
						<th style="width: 70px">Montant</th>					
					</tr>
				</thead>
				<tbody> 
				<?php 
				foreach($operationsDuMois as $oM){
					echo('
						<tr class="ligneoperation" id='.$oM['id'].'>
							<td class="update"><input id="Modif" type="button" value ="Modif."/><input id="Suppr" type="button" value ="Suppr."/></td>
							<td class="editable" id="date">'.$oM['date'].'</td>
							<td class="editable" id="nature">'.$oM['nature'].'</td>
							<td class="editable" id="type">'.$oM['type'].'</td>
							<td class="editable" id="postebudgetaireoperation">'.get_nom_poste_budgetaire_from_id_poste_budgetaire($oM['posteBudgetaire'])['nom'].'</td>
							<td class="editable" id="intitule">'.$oM['intitule'].'</td>
							<td><input class="editable" id="montant" type="text" value="'.$oM['montant'].'"/></td>
						</tr>
					');
				}
				?>
				</tbody>			
			</table>
		</div>

        <div id="block_solde" class="d-flex justify-content-end align-items-center">
            <label>Solde :</label>
            <input id="solde" type="text" name="solde" value=""/>
        </div>
		
		<hr>
		
		<div id="saisieetrecap">
			<div id="formulairesaisie">
				<p id="titresaisie">Saisir une nouvelle opération</p>

                <table>
					
					<tr>
						<td id="idOperation"></td>
					</tr>
					
                    <tr>
                        <td><label>Date:</label></td>
                        <td><input class="eltFormulaireSaisieOpe" id="dateoperation" type="date" name="dateoperation" value="dateoperation"/></td>
                    </tr>
                
                    <tr>
                        <td><label>Nature:</label></td>
                        <td>
                            <select class="eltFormulaireSaisieOpe" id="natureoperation" name="natureoperation">
                                <option value="Dépense">Dépense</option>
                                <option value="Recette">Recette</option>
                            </select>
                        </td>
                    </tr>
                
                    <tr>
                        <td><label>Type:</label>
                        <td>
                            <select class="eltFormulaireSaisieOpe" id="typeoperation" name="typeoperation">
                                <option value="Carte Bancaire">Carte bancaire</option>
                                <option value="Chèque">Chèque</option>
                                <option value="Virement">Virement</option>
                                <option value="Prélèvement">Prélèvement</option>
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><label>Poste budgétaire:</label></td>
                        <td>
                            <select class="eltFormulaireSaisieOpe" id="postebudgetaire" name="postebudgetaire">
                            <?php foreach($posteBudgetaire as $pb){echo ("<option value=".$pb['nom'].">".$pb['nom']."</option>");}?>
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><label>Intitulé:</label></td>
                        <td><textarea class="eltFormulaireSaisieOpe" id="intituleoperation"rows="1" cols="40"></textarea></td>
                    </tr>
                    
                    <tr>
                        <td><label>Montant:</label></td>
                        <td><input class="eltFormulaireSaisieOpe" id="montantoperation" type="number" step="0.01"/></td>
                    </tr>
                </table>

                <input id="saveOperation" type="button" name="enregistrer" value="Enregistrer"/>
				<input id="annuleOperation" type="button" style="visibility : hidden" value="Annuler"/>
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
					<?php 
					
						foreach($posteBudgetaire as $pb){
							echo('
							<tr class="recapmensuelle">
								<td><input class="recapnomposte" type="texte" name="recapnomposte" value="'.$pb['nom'].'"/></td>
								<td><input class="recapmontantposte" type="text" name="montantCumuleMois" value=""</td>
							</tr>
							');
						}
					?>
					</tbody>
				</table>
			</div>
		</div>
		
		<hr>
<?php $content = ob_get_clean(); ?>
			
<?php include(dirname(__FILE__)."/../templates/template.php");
