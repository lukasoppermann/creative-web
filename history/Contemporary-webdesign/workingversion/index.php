<?
/* variable */
$title = 'Design Portfolio of Lukas Oppermann';

/* laden der header.php */
require_once('assets/header.php');

/* laden des Inhalts */

/* Pfad zur Seite */
$portfolio_item = 'assets/portfolio/'.$_GET['portfolio'].'.php';

if( file_exists($portfolio_item) )
{
	require_once($portfolio_item);
}
else{
	require_once('assets/homepage.php');
}

/* laden footer.php */
require_once('assets/footer.php');