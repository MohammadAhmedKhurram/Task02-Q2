
export default function CountryCard (props: Card) {
    return (
        <table
          style={{
            borderCollapse: "collapse",
            width: "40%",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "2px solid #D73E10",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "12px",
                  backgroundColor: "#D73E10",
                  color: "white",
                  fontSize: "18px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                Country Info
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "12px",
                  fontSize: "18px",
                  color: "#D73E10",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                Name:
              </th>
              <td
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: "12px",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                {props.Name}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "12px",
                  fontSize: "18px",
                  color: "#D73E10",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                Population:
              </th>
              <td
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: "12px",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                {props.Population}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "12px",
                  fontSize: "18px",
                  color: "#D73E10",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                Capital:
              </th>
              <td
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: "12px",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                {props.Capital}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "12px",
                  fontSize: "18px",
                  color: "#D73E10",
                  backgroundColor: "white",
                  borderBottom: "1px solid #D73E10",
                }}
              >
                Bonus Fun Fact:
              </th>
              <td
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: "12px",
                  backgroundColor: "white",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderBottom: "none",
                }}
              >
                {props.BonusFunFact}
              </td>
            </tr>
          </tbody>
        </table>
      );
    };
    