<<?php 

if(isset($_POST['nome']) && !empty($_POST['nome'])
	&& isset($_POST['email']) && !empty($_POST['email'])
	&& isset($_POST['assunto']) && !empty($_POST['assunto'])
	&& isset($_POST['menssagem']) %% !empty($_POST['menssagem'])){

	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$assunto = addslashes($_POST['assunto']);
	$menssagem = addslashes($_POST['menssagem']);

	$para_quem = 'afonso33barbosa@gmail.com';
	$assunto_postal = 'Portfólio'.$assunto;
	$corpo_email = "Nome: ".$nome. "\r\n"
								 ."Email: ".$email. "\r\n"
								 ."menssagem: ".$menssagem; 

	$header = 'From:afonso33barbosa@gmail.com'."\r\n"
						."Replay-To:".$email."\r\n"
						."X=Mailer:PHP/".phpversion();


	if(mail($para_quem, $corpo_email, $header)){
		echo "email enviado com sucesso";
	}
	else{
		echo "falha no envio"
	}
}
else{
	echo "<script>alert('preencha os campos corretamente');</script>";
}


 ?>