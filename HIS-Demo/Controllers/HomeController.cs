using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jQueryMobileTemplate.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GIndex()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public PartialViewResult Login()
        {
            return PartialView("_LoginView");
        }
       

        [HttpPost]
        public void Login(FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
                jQueryMobileTemplate.MvcApplication.UserLogin = false;
                Response.Redirect("/Home/Index");
                
            }
            catch
            {
               
            }
        }

    }
}
