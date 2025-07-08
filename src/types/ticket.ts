// export type Ticket = {
//   id: number;
//   match: string;
//   date: string;
//   time: string;
//   competition: string;
//   venue: string;
//   area: string;
//   section: string;
//   row: string;
//   price: number;
//   availability: number;
//   togather: number;
// };

export type Ticket = {
  id: string;
  broker_id: string;
  match_id: string;
  section_id: string;
  ticket_description: string;
  row: string;
  price: number;
  availability: number;
  currency: string;
  attributes: string[];
  togather_upto: string;
  event_id: string;
  section_name: string;
  section_stand_name: string;
  section_tier: string;
  restrictions: string[];
  other_shipping_id: string;
  shipping_type: string;
  sell_as: string;
};
