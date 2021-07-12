<?php

use MailPoetVendor\Twig\Environment;
use MailPoetVendor\Twig\Error\LoaderError;
use MailPoetVendor\Twig\Error\RuntimeError;
use MailPoetVendor\Twig\Extension\SandboxExtension;
use MailPoetVendor\Twig\Markup;
use MailPoetVendor\Twig\Sandbox\SecurityError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedTagError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedFilterError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedFunctionError;
use MailPoetVendor\Twig\Source;
use MailPoetVendor\Twig\Template;

/* deactivationSurvey/js.html */
class __TwigTemplate_7f47c27f4132643b9e5a178c2fd24d38e077a966728aa123ec9ae6a265397782 extends \MailPoetVendor\Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<script type=\"text/javascript\">
  jQuery(function(\$){
    var deactivateLink = \$('#the-list').find('[data-slug=\"mailpoet\"] span.deactivate a');
    var overlay = \$('#mailpoet-deactivate-survey');
    var closeButton = \$('#mailpoet-deactivate-survey-close');
    var formOpen = false;

    deactivateLink.on('click', function(event) {
      event.preventDefault();
      overlay.css('display', 'table');
      formOpen = true;
    });

    closeButton.on('click', function(event) {
      event.preventDefault();
      overlay.css('display', 'none');
      formOpen = false;
      location.href = deactivateLink.attr('href');
    });

    \$(document).on('keyup', function(event) {
      if ((event.keyCode === 27) && formOpen) {
        location.href = deactivateLink.attr('href');
      }
    });
  });
</script>
";
    }

    public function getTemplateName()
    {
        return "deactivationSurvey/js.html";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "deactivationSurvey/js.html", "/var/www/html/beauty/wp-content/plugins/mailpoet/views/deactivationSurvey/js.html");
    }
}
