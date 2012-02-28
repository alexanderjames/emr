using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HISDemo.Models;

namespace HISDemo.Controllers
{
    public class PatientDischargeController : Controller
    {
        //
        // GET: /PatientDischarge/

        public ActionResult Create()
        {
            return View(Patients.All.Last());
        }

    }
}
