<?php 
if(isset($_POST['nome']) && !empty($_POST['nome'])
	&& isset($_POST['email']) && !empty($_POST['email'])
	&& isset($_POST['telefone']) && !empty($_POST['telefone'])
	&& isset($_POST['assunto']) && !empty($_POST['assunto'])
	&& isset($_POST['menssagem']) && !empty($_POST['menssagem'])){
	$nome = addslashes($_POST['nome']);
	$telefone = addslashes($_POST['telefone']);
	$email = addslashes($_POST['email']);
	$assunto = addslashes($_POST['assunto']);
	$menssagem = addslashes($_POST['menssagem']);
	$to = 'afonso33barbosa@gmail.com';
	$assunto_postal = 'Portfólio -> '.$assunto;
	$body = "Nome: ".$nome. "\r\n"
								 ."Email: ".$email. "\r\n"
								 ."Telefone: ".$telefone. "\r\n"
								 ."menssagem: ".$menssagem; 
	// $header = 'From:port.butterfly@theevolution.com'."\r\n"
	// 					."Replay-To:".$email."\r\n"
	// 					."X=Mailer:PHP/".phpversion();
	if(mail($to, $assunto_postal, $body)){
		echo "<Script>location.href='thanks.html';</script>";
	}
	else{
		echo "<script>alert('Não foi possível enviar seu email. Tente novamente mais tarde.');</script>";
	}
}
else{
	echo "<script>alert('preencha os campos corretamente'); location.href='index.html#contact';</script>";
}
 ?>