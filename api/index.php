<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App();

$app->add(new \Slim\Middleware\JwtAuthentication([
   "path" => ["/api", "/admin"],
    "secret" => "supersecretkeyyoushouldnotcommittogithub"
]));
