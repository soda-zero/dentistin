import { api } from "@/utils/api";

export default function InsuranceCard() {
  const { data: insurances } = api.insurance.getAllInsurances.useQuery();

  return (
    <div className="max-w-md overflow-x-auto rounded-lg border shadow">
      <table className="table-zebra  table w-full ">
        <tbody>
          {insurances?.map((insurance) => (
            <tr key={insurance.id}>
              <td>{insurance.insuranceName}</td>
              <td className="flex  justify-end">
                <img
                  src={insurance.insuranceImage as string}
                  alt="Insurance Image"
                  width={50}
                  height={50}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
