export type CreatorUserId = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash?: string;
  active_flag: boolean;
  value: number;
};

export type UserId = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash?: string;
  active_flag: boolean;
  value: number;
};

export type Email = {
  value?: string;
  primary?: boolean;
};

export type Phone = {
  value?: string;
  primary?: boolean;
};

export type PersonId = {
  active_flag: boolean;
  name: string;
  email: Email[];
  phone: Phone[];
  value: number;
};

export type OrgId = {
  name: string;
  people_count: number;
  owner_id: number;
  address?: string;
  active_flag: boolean;
  cc_email: string;
  value: number;
};

export type Deal = {
  deal: {
    id: number;
    creator_user_id: CreatorUserId;
    user_id: UserId;
    person_id: PersonId;
    org_id: OrgId;
    stage_id: number;
    title: string;
    value: number;
    currency: string;
    add_time: string;
    update_time: string;
    stage_change_time: string;
    active: boolean;
    deleted: boolean;
    status: string;
    probability?: number;
    next_activity_date?: string;
    next_activity_time?: string;
    next_activity_id?: string;
    last_activity_id?: string;
    last_activity_date?: string;
    lost_reason?: string;
    visible_to: string;
    close_time: string;
    pipeline_id: number;
    won_time: string;
    first_won_time: string;
    lost_time?: string;
    products_count: number;
    files_count: number;
    notes_count: number;
    followers_count: number;
    email_messages_count: number;
    activities_count: number;
    done_activities_count: number;
    undone_activities_count: number;
    participants_count: number;
    expected_close_date?: string;
    last_incoming_mail_time?: string;
    last_outgoing_mail_time?: string;
    label?: string;
    stage_order_nr: number;
    person_name: string;
    org_name: string;
    next_activity_subject?: string;
    next_activity_type?: string;
    next_activity_duration?: string;
    next_activity_note?: string;
    formatted_value: string;
    weighted_value: number;
    formatted_weighted_value: string;
    weighted_value_currency: string;
    rotten_time?: string;
    owner_name: string;
    cc_email: string;
    org_hidden: boolean;
    person_hidden: boolean;
  };
};

export type Pagination = {
  start: number;
  limit: number;
  more_items_in_collection: boolean;
};

export type AdditionalData = {
  pagination: Pagination;
};

export type User = {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash?: string;
  active_flag: boolean;
};

export type Organization = {
  id: number;
  name: string;
  people_count: number;
  owner_id: number;
  address?: string;
  active_flag: boolean;
  cc_email: string;
};

export type Person = {
  active_flag: boolean;
  id: number;
  name: string;
  email: Email[];
  phone: Phone[];
};

export type RelatedObjects = {
  user: User;
  organization: Organization;
  person: Person;
};

type Deals = {
  success: boolean;
  data: Deal[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
};

export default Deals;
