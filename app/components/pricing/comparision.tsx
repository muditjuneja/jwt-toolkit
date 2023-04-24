import styles from "../../styles/pricing/comparison.module.css"
import st from "../../assets/pricing/ST.png"
import firebase from "../../assets/pricing/firebase.png"
import aws from "../../assets/pricing/AWS.png"
import keycloak from "../../assets/pricing/keycloak.png"
import auth0 from "../../assets/pricing/Auth0.png"


const THead = () => {
    return <thead>
    <tr>
        <th></th>
        <th>
            <div>
                <img src={st.src} alt=""/>
            </div>
            <span>Supertokens</span>
        </th>
        <th>
            <div>
                <img src={auth0.src} alt=""/>
            </div>
            <span>Auth0</span>
        </th>
        <th>
            <div>
                <img src={aws.src} alt=""/>
            </div>
            <span>AWS Cognito</span>
        </th>
        <th>
            <div>
                <img src={keycloak.src} alt=""/>
            </div>
            <span>Keycloak</span>
        </th>
        <th>
            <div>
                <img src={firebase.src} alt=""/>
            </div>
            <span>Firebase</span>
        </th>
    </tr>
    </thead>
}

const rows = [
    {
        feat: "Pricing",
        st: {
            text: "$$/Free",
            color: "green",
        },
        auth0: {
            text: "$$$$",
            color: "red"
        },
        aws: {
            text: "$$$",
            color: "warning"
        },
        key: {
            text: "Free",
            color: "green"
        },
        fire: {
            text: "$$",
            color: "warning"
        }
    },{
        feat: "User Satisfaction",
        st: {
            text: "High",
            color: "green",
        },
        auth0: {
            text: "Medium",
            color: "warning"
        },
        aws: {
            text: "Low",
            color: "red"
        },
        key: {
            text: "Low",
            color: "red"
        },
        fire: {
            text: "High",
            color: "green"
        }
    },{
        feat: "UI and backend customisability",
        st: {
            text: "High",
            color: "green",
        },
        auth0: {
            text: "Medium",
            color: "warning"
        },
        aws: {
            text: "Low",
            color: "red"
        },
        key: {
            text: "Low",
            color: "red"
        },
        fire: {
            text: "Low",
            color: "red"
        }
    },{
        feat: "Size of the company offering services",
        st: {
            text: "Startup",
            color: "red",
        },
        auth0: {
            text: "Enterprise",
            color: "green"
        },
        aws: {
            text: "Enterprise",
            color: "green"
        },
        key: {
            text: "Backed by Enterprise",
            color: "green"
        },
        fire: {
            text: "Enterprise",
            color: "green"
        }
    },{
        feat: "Company provided support for free tiers",
        st: {
            text: "High",
            color: "green",
        },
        auth0: {
            text: "Low",
            color: "red"
        },
        aws: {
            text: "Low",
            color: "red"
        },
        key: {
            text: "None",
            color: "red"
        },
        fire: {
            text: "Medium",
            color: "warning"
        }
    },{
        feat: "Self hostable",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
            message: ""
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Open Source",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "No",
            color: "red",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Managed Service",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Supported Cloud Providers",
        st: {
            text: "All",
            color: "green",
        },
        auth0: {
            text: "All",
            color: "green",
        },
        aws: {
            text: "AWS",
            color: "red"
        },
        key: {
            text: "All",
            color: "green"
        },
        fire: {
            text: "GCP",
            color: "red"
        }
    },{
        feat: "Compliance (SOC2, GDPR...)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Self hosted - so not required",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "User management dashboard",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Passwordless login (email + phone no)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Partial",
            color: "warning"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Social and Email Password login",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Custom Open ID connector",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "SAML Login",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Being an OAuth 2.0 provider",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "External Database",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "SLA guarantees",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "Not Known",
            color: "warning"
        }
    },{
        feat: "Single sign on",
        st: {
            text: "Partial",
            color: "warning",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "2FA",
        st: {
            text: "Partial",
            color: "warning",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Partial",
            color: "warning"
        }
    },{
        feat: "Roles and permissions",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Web3 login",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Machine to machine",
        st: {
            text: "Partial",
            color: "warning",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Partial",
            color: "warning"
        }
    },{
        feat: "Multi tenancy",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "warning"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Cookie based session management (Out of the box)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "No",
            color: "red",
        },
        aws: {
            text: "No",
            color: "red",
        },
        key: {
            text: "No",
            color: "red",
        },
        fire: {
            text: "No",
            color: "red",
        }
    },{
        feat: "Customise Emails and SMS",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green",
        },
        key: {
            text: "Partial",
            color: "warning",
        },
        fire: {
            text: "Partial",
            color: "warning",
        }
    },
]

const TBody = () => {
    return <tbody>
    {rows.map((el, index) => {
        return <tr key={index}>
            <td className={styles.feat}>{el.feat}</td>
            <td className={styles[el.st.color]}>{el.st.text}</td>
            <td className={styles[el.auth0.color]}>{el.auth0.text}</td>
            <td className={styles[el.aws.color]}>{el.aws.text}</td>
            <td className={styles[el.key.color]}>{el.key.text}</td>
            <td className={styles[el.fire.color]}>{el.fire.text}</td>
        </tr>
    })}
    </tbody>
}

const Comparision = () => {
    return <div className={styles.comparison}>
        <div className={styles.text}>
            <h1>Feature based comparison</h1>
            <p>See how we compare with other authentication solutions</p>
        </div>
        <table className={styles.table}>
            <THead />
            <TBody />
        </table>
    </div>
}

export default Comparision;
