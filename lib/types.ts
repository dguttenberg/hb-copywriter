export interface GeneratorInput {
  objective: string;
  num_versions: number;
  channel: string;
  additional_notes: string;
}

export interface NucleusRequest {
  request_text: string;
  platform_lane: "yes_you_can_chef" | "built_for_this";
  output_type: "ad_copy_batch";
  audience: string;
  channel: string;
  sku?: string;
}

export interface ContextPackage {
  satellite_type: string;
  objective: string;
  audience_context: {
    who: string;
    mindset: string;
    what_they_need: string;
  };
  tone_direction: {
    lane: string;
    register: string;
    sounds_like: string;
    does_not_sound_like: string;
  };
  copy_rules: string[];
  voice_calibration: string;
  format_spec: string;
  art_direction: {
    palette: string;
    in_frame: string;
    never_in_frame: string;
    emotional_reference: string;
    product_to_food: string;
  };
  content_inputs: {
    primary_message: string;
    product_context: string;
    use_cases: string[];
    proof_points: string[];
    anchors_to_apply: string[];
  };
  structural_rules: string[];
  do_not: string[];
  reasoning_trace: string;
}

export interface NucleusResponse {
  intent: {
    output_type: string;
    platform_lane: string;
    audience: string;
    channel: string;
    sku: string;
    activated_components: { component: string; confidence: string }[];
    activation_reasoning: string;
    lane_reasoning: string;
  };
  context_package: ContextPackage;
  _metadata: {
    nucleus_version: string;
    knowledge_version: string;
    processed_at: string;
    model: string;
  };
}

export interface CopyRow {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  product_match: string;
  clothing_context: string;
}

export interface ExcelRow {
  placement: string;
  format: string;
  start_date: string;
  copy_date: string;
  language: string;
  Line1a: string;
  Line2a: string;
  Line3a: string;
  logo_lockup: string;
  color_block: string;
  photo: string;
}
