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

        public ActionResult Login()
        {
            //if(jQueryMobileTemplate.MvcApplication.UserLogin==false)
            //    return RedirectToActionPermanent("Index");
            return PartialView("_LoginView");
        }


        [HttpPost]
        public JavaScriptResult Login(FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
                jQueryMobileTemplate.MvcApplication.UserLogin = false;
                
            }
            catch
            {
                jQueryMobileTemplate.MvcApplication.UserLogin = true;
               
            }
            return JavaScript("window.location.href='/Home/Index/'");
        }

        public string Logout()
        {
            jQueryMobileTemplate.MvcApplication.UserLogin = true;
            jQueryMobileTemplate.MvcApplication.IsNewPatient = false;
            return "done";
        }
        
        public PartialViewResult IAbout()
        {
            return PartialView("_About");
        }
        public PartialViewResult ContactUs()
        {
            return PartialView("_ContactUs");
        }
        public PartialViewResult Visit()
        {
            return PartialView("_visit");
        }
        public PartialViewResult PP()
        {
            return PartialView("_privacy");
        }

    }
}
