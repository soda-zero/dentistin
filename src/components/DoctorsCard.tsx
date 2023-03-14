import { api } from "@/utils/api";

type Doctor = {
  id: number;
  doctorName: string;
  doctorImage: string | null;
  info: string | null;
  doctorSpecializations: {
    id: number;
    specialization: {
      id: number;
      specializationName: string;
    };
  }[];
  doctorInsurances: {
    id: string;
    insurance: {
      id: number;
      insuranceName: string;
    };
  }[];
};
export default function Doctors() {
  const { data: doctors } = api.doctor.getAllDoctors.useQuery();
  return (
    <>
      {doctors?.map((doctor: Doctor) => (
        <div
          className="card w-full max-w-3xl bg-base-100 shadow"
          key={doctor.id}
        >
          <figure className="relative">
            <img
              src={doctor.doctorImage as string}
              alt="Doctor profile image"
            />
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {doctor.doctorSpecializations.map((specializations) => (
                <div
                  key={specializations.id}
                  className="badge-secondary badge  badge-xs gap-1 "
                >
                  {specializations.specialization.specializationName}
                </div>
              ))}
            </div>
          </figure>
          <div className="card-body">
            <div className="flex items-start">
              <h2 className="card-title">{doctor.doctorName}</h2>
            </div>
            <p>{doctor.info}</p>
            <div className="card-actions flex-wrap justify-end">
              {doctor.doctorInsurances.map((insurances) => (
                <div
                  key={insurances.id}
                  className="badge-outline badge badge-xs"
                >
                  <span>{insurances.insurance.insuranceName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
