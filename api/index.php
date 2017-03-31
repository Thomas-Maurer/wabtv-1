<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App();
/*
$app->add(new \Slim\Middleware\JwtAuthentication([
   "path" => ["/api", "/admin"],
    "secret" => "supersecretkeyyoushouldnotcommittogithub"
]));
*/

$app->get('/getCurrentProg', function (Request $request, Response $response)
{
  $prog = file_get_contents('data/prog.json');

  $newResponse = $response->withJson(json_decode($prog));

  return $newResponse;
});

$app->post('/authenticate', function (Request $request, Response $response)
{
  $body = $request->getBody();

  $newResponse = $response->withJson($body);

  return $newResponse;
});




$app->run();
