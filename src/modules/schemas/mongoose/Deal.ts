import mongoose, { Document, Schema, Model } from 'mongoose';

import { Deal } from '@modules/schemas/dtos/Deals';

export type DealDocument = Document & Deal;

type DealModel = Model<DealDocument>;

const DealSchema = new Schema(
  {
    deal: {
      id: {
        type: Number,
        required: false,
      },
      creator_user_id: {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        has_pic: {
          type: Number,
          required: true,
        },
        pic_hash: {
          type: String,
          required: false,
        },
        active_flag: {
          type: Boolean,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
      user_id: {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        has_pic: {
          type: Number,
          required: true,
        },
        pic_hash: {
          type: String,
          required: false,
        },
        active_flag: {
          type: Boolean,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
      person_id: {
        active_flag: {
          type: Boolean,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        email: {
          value: {
            type: String,
            required: false,
          },
          primary: {
            type: Boolean,
            required: false,
          },
        },
        phone: {
          value: {
            type: String,
            required: false,
          },
          primary: {
            type: Boolean,
            required: false,
          },
        },
        value: {
          type: Number,
          required: true,
        },
      },
      org_id: {
        name: {
          type: String,
          required: true,
        },
        people_count: {
          type: Number,
          required: true,
        },
        owner_id: {
          type: Number,
          required: true,
        },
        address: {
          type: String,
          required: false,
        },
        active_flag: {
          type: Boolean,
          required: true,
        },
        cc_email: {
          type: String,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
      stage_id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      add_time: {
        type: String,
        required: true,
      },
      update_time: {
        type: String,
        required: true,
      },
      stage_change_time: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        required: true,
      },
      deleted: {
        type: Boolean,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      probability: {
        type: Number,
        required: false,
      },
      next_activity_date: {
        type: String,
        required: false,
      },
      next_activity_time: {
        type: String,
        required: false,
      },
      next_activity_id: {
        type: String,
        required: false,
      },
      last_activity_id: {
        type: String,
        required: false,
      },
      last_activity_date: {
        type: String,
        required: false,
      },
      lost_reason: {
        type: String,
        required: false,
      },
      visible_to: {
        type: String,
        required: true,
      },
      close_time: {
        type: String,
        required: true,
      },
      pipeline_id: {
        type: Number,
        required: true,
      },
      won_time: {
        type: String,
        required: true,
      },
      first_won_time: {
        type: String,
        required: true,
      },
      lost_time: {
        type: String,
        required: false,
      },
      products_count: {
        type: Number,
        required: true,
      },
      files_count: {
        type: Number,
        required: true,
      },
      notes_count: {
        type: Number,
        required: true,
      },
      followers_count: {
        type: Number,
        required: true,
      },
      email_messages_count: {
        type: Number,
        required: true,
      },
      activities_count: {
        type: Number,
        required: true,
      },
      done_activities_count: {
        type: Number,
        required: true,
      },
      undone_activities_count: {
        type: Number,
        required: true,
      },
      participants_count: {
        type: Number,
        required: true,
      },
      expected_close_date: {
        type: String,
        required: false,
      },
      last_incoming_mail_time: {
        type: String,
        required: false,
      },
      last_outgoing_mail_time: {
        type: String,
        required: false,
      },
      label: {
        type: String,
        required: false,
      },
      stage_order_nr: {
        type: Number,
        required: true,
      },
      person_name: {
        type: String,
        required: true,
      },
      org_name: {
        type: String,
        required: true,
      },
      next_activity_subject: {
        type: String,
        required: false,
      },
      next_activity_type: {
        type: String,
        required: false,
      },
      next_activity_duration: {
        type: String,
        required: false,
      },
      next_activity_note: {
        type: String,
        required: false,
      },
      formatted_value: {
        type: String,
        required: true,
      },
      weighted_value: {
        type: Number,
        required: true,
      },
      formatted_weighted_value: {
        type: String,
        required: true,
      },
      weighted_value_currency: {
        type: String,
        required: true,
      },
      rotten_time: {
        type: String,
        required: false,
      },
      owner_name: {
        type: String,
        required: true,
      },
      cc_email: {
        type: String,
        required: true,
      },
      org_hidden: {
        type: Boolean,
        required: true,
      },
      person_hidden: {
        type: Boolean,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<DealDocument, DealModel>('Deal', DealSchema);
