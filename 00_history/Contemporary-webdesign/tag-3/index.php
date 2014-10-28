<? 
$title = 'Design Portfolio of Lukas Oppermann';
require_once('assets/header.php');
// END Header

// get the portfolio item from url and add path and extension
$portfolio_item = 'assets/portfolio/'.$_GET['portfolio'].'.php'; 

// check if a file like this exits on the server 
if( file_exists($portfolio_item ) )
{
	// if it does exist load it
	require_once($portfolio_item);
}
// if it does not exists
else
{
	// load homepage
	require_once('assets/homepage.php');
}

// Start Footer
require_once('assets/footer.php');
?>