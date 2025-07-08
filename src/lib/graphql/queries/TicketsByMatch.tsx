import { gql } from "@apollo/client";

export const GET_TICKETS_BY_MATCH = gql`query Tickets($eventId: ID!) {
    getTicketsByMatch(event_id: $eventId) {
    tickets {
            id
            broker_id
            match_id
            section_id
            ticket_description
            row
            price
            availability
            currency
            attributes
            togather_upto
            event_id
            section_name
            section_stand_name
            section_tier
            restrictions
            other_shipping_id
            shipping_type
            sell_as
        }
        page
        limit
        totalCount
    }
}`;
