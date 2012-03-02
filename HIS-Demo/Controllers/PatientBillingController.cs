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

            return View(jQueryMobileTemplate.MvcApplication.ActivePatient);



        }
        [HttpPost]
        public JavaScriptResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                var patientId = jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID;
                UpdateModel(jQueryMobileTemplate.MvcApplication.ActivePatient);
                jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID = patientId;

                var pa = Patients.All.Where(p => p.PatientID == patientId).FirstOrDefault();
                if (pa == null)
                {
                    Patients.All.Add(jQueryMobileTemplate.MvcApplication.ActivePatient);
                }
                else
                {
                    UpdateModel(pa);
                    pa.PatientID = patientId;
                }

                return JavaScript("window.location.href='/Home/Index/'");


            }
            catch
            {
                return JavaScript("location.reload(true)");
            }
        }
    }
}
