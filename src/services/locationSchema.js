import { z } from "zod";

export const LocationSchema = z.object({
    name: z.string().min(1, "Name is Required"),
    address: z.string().min(1, "Address is Required"),
    city: z.string().min(1, "City is Required"),
    county: z.string().min(1, "County is Required"),
    state: z.string().min(1, "State is Required"),
    picture: z.string().optional(),
});