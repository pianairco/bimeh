import {Menu} from "./menu-service.service";

export var menuDef: Menu[] = [
  {
    id: 6,
    badge: null,
    title: "مدیریت ریسک",
    type: 'dropdown',
    icon: null,
    active: null,
    link: "risk-management",
    children: [
      {
        id: 600,
        badge: null,
        title: "مدیریت دارایی",
        type: 'dropdown',
        icon: null,
        active: null,
        link: "risk-management/assets-management",
        children: [
          {
            id: 610,
            badge: null,
            title: "تنظیمات",
            type: "dropdown",
            icon: null,
            active: null,
            link: "risk-management/assets-management/settings",
            children: [
              {
                id: 611,
                badge: null,
                title: "تنظیم پارامترهای پیامد",
                type: "simple",
                icon: null,
                active: null,
                link: "risk-management/assets-management/settings/consequence-parameters",
                children: null,
                parentId: 610
              },
              {
                id: 612,
                badge: null,
                title: "تعریف دسته دارایی ها",
                type: "simple",
                icon: null,
                active: null,
                link: "risk-management/assets-management/settings/asset-grouped",
                children: null,
                parentId: 610
              }
            ],
            parentId: 600
          }
        ],
        parentId: 6
      }
    ],
    parentId: null
  },
  {
    id: 5,
    badge: null,
    title: "اطلاعات پایه",
    type: "dropdown",
    icon: null,
    active: null,
    link: "basic-info",
    children: [
      {
        id: 500,
        badge: null,
        title: "سرمایه گذار جدید",
        type: "simple",
        icon: null,
        active: null,
        link: "basic-info/common-form/api*modules*basicinfo*create-customer",
        children: null,
        parentId: 5
      }
    ],
    parentId: null
  }
];
