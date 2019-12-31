import React from "react";

interface IFootList {
    title: string;
    url: string;
  }
  
  let footList: IFootList[] = [
    {
      title: "About",
      url: "",
    },
    {
      title: "Help",
      url: "",
    },
    {
      title: "Blog",
      url: "",
    },
    {
      title: "Privacy",
      url: "",
    },
    {
      title: "Apps",
      url: "",
    },
    {
      title: "Advertise",
      url: "",
    },
    {
      title: "Developers",
      url: "",
    },
    {
      title: "@ DollarFare",
      url: "",
    },
  ];

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="page-footer" id="pFooter">
            <div className="fixed-bottom bg-light">
              <ul id="foot" className="list-group list-group-horizontal-sm justify-content-center">
                {footList.map((item) => {
                  return (
                    <li key={item.title} className="list-group-item">
                      <a href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </footer>
        )
    }
}