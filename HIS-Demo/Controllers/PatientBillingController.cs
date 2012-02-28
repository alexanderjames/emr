using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HISDemo.Models;

namespace HISDemo.Controllers
{
    public class PatientBillingController : Controller
    {
        //
        // GET: /PatientBilling/

        public ActionResult Create()
        {

            return View(Patients.All.Last());



        }
        [HttpPost]
        public ActionResult Create(FormCollection collection, Patient Patient)
        {
            try
            {
                // TODO: Add insert logic here

                Patients.All.Add(Patient);


                return RedirectToAction("Create", "PatientDischarge");
            }
            catch
            {
                return View();
            }
        }
    }
}
