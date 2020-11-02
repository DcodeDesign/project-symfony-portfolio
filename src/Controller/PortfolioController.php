<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/", name="portfolio")
     */
    public function index(Request $request,\Swift_Mailer $mailer){
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);
        return $this->render('portfolio/index.html.twig',['contactForm' => $form->createView()]);
    }
}
