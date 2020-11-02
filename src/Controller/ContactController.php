<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if (isset($_POST['data'])) {
            $contact = json_decode($_POST['data'], true);
            var_dump($contact[0]['value'] . " " . $contact[1]['value'] . " " . $contact[2]['value']);
            $sujet = trim($contact[0]['value']) ;
            $email = trim($contact[1]['value']);
            $text = trim($contact[2]['value']);
            $message = (new \Swift_Message('Nouveau contact'))
                ->setFrom($email)
                ->setTo('gravythomas@gmail.com')
                ->setBody(
                    $this->renderView(
                        'emails/contact.html.twig', [
                            'sujet' => $sujet,
                            'email' => $email,
                            'message' => $text,
                        ]
                    ),
                    'text/html'
                );

            $mailer->send($message);
        }
        return $this->render('contact/index.html.twig');
    }
}