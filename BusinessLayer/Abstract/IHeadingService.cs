﻿using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface IHeadingService
    {
        List<Heading> GetListByWriter(int id);
        List<Heading> GetList();
        void HeadingAdd(Heading heading);
        Heading GetById(int headingId);
        void HeadingDelete(Heading heading);
        void HeadingUpdate(Heading heading);
    }
}
