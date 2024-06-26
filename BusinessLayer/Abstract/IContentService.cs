﻿using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    interface IContentService
    {
        List<Content> GetListByWriter(int id);
        List<Content> GetListContentValue(string value);
        List<Content> GetList();
        List<Content> GetListSearch(string p);
        void ContentAdd(Content content);
        Content GetById(int contentId);
        void ContentDelete(Content content);
        void ContentEdit(Content content);
        void ContentUpdate(Content content);
        int TotalContent(int contentId);
        List<Content> GetListByHeadingId(int id);
    }
}
